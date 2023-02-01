import { issueUserJWT } from '../../../apis/security/securityUtils';
import Airtable from 'airtable';

export default async function handler(req, res) {
  console.log("Hola que tal");
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Method not allowed' });

  const { email } = req.body;

  Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });
  const base = Airtable.base('appwBttD3ULNuE52O');

  const data = base('Table 1').select({
    view: 'Grid view',
    filterByFormula: '{email} = "' + email + '"',
  });

  const record = (await data.firstPage())[0];

  const { name } = record.fields;

  if (record)
    return res.status(200).json({
      id: record.id,
      name,
      email,
      ...record.fields,
      token: issueUserJWT(email).token,
    });

  return res.status(401).json({ err: 'not found' });
}
