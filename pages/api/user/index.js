import { verifyUserJWT } from '../../../apis/security/securityUtils';
import Airtable from 'airtable';

export default async function handler(req, res) {
  if (req.method !== 'GET')
    return res.status(405).json({ message: 'Method not allowed' });

  let email = '';

  try {
    let token = req.headers.authorization;
    token = token.replace('Bearer ', '');

    email = verifyUserJWT(token).sub;
  } catch (err) {
    return res.status(401).json({ message: 'not authorized' });
  }

  Airtable.configure({ apiKey: process.env.NEXT_AIRTABLE_API_KEY });
  const base = Airtable.base('appwBttD3ULNuE52O');
  const data = base('Table 1').select({
    view: 'Grid view',
    filterByFormula: '{email} = "' + email + '"',
  });

  const userData = (await data.firstPage())[0].fields;

  res.json({ ...userData });
}
