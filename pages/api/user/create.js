import {registerAPI} from "../../../apis/authentication";

export default async function handler(req, res) {
  console.log("Hello there");
  if (req.method !== 'PUT')
    return res.status(405).json({message: 'Method not allowed'});

  console.log(req.body);
  const {email, firstName, lastName} = req.body;

  try {
    console.log("Creating user api endpoint", email, firstName, lastName);
    await registerAPI({email, firstName, lastName});
    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(500).json({err: err.message || 'could not create user'});
  }
}
