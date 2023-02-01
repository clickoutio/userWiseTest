import {LoginAttr, RegisterAttr} from './interfaces/authentication';
import * as Airtable from "airtable";

const login = async (payload: LoginAttr) => {
  const {email, password} = payload;
  console.log(email, process.env.AIRTABLE_API_KEY);

  Airtable.configure({apiKey: process.env.AIRTABLE_API_KEY});
  const base = Airtable.base('appwBttD3ULNuE52O');

  const data = base('Table 1').select({
    view: 'Grid view',
    filterByFormula: '{email} = "' + email + '"',
  });

  const record = (await data.firstPage())[0];

  const {name} = record.fields;

  if (record)
    return {
      id: record.id,
      name,
      email,
      ...record.fields,
    };

  return null;
};

const register = async (payload: RegisterAttr) => {
  const {firstName, lastName, email} = payload;
  Airtable.configure({apiKey: process.env.AIRTABLE_API_KEY});
  const base = Airtable.base('appwBttD3ULNuE52O');

  const data = base('Table 1').select({
    view: 'Grid view',
    filterByFormula: '{email} = "' + email + '"',
  });

  const record = (await data.firstPage())[0];

  if (record)
    return;

  console.log("saving the user in the use case");
  const name = firstName + ' ' + lastName;
  await base('Table 1').create({
    email,
    Name: name,
    Status: 'Registered',
  });
}

export {login as loginAPI, register as registerAPI};
