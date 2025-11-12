local claims = {
  email_verified: false
} + std.extVar('claims');

{
  identity: {
    traits: {
      // Allowing unverified email addresses enables account
      // enumeration attacks, especially if the value is used for
      // e.g. verification or as a password login identifier.
      //
      // Therefore we only return the email if it (a) exists and (b) is marked verified
      // by GitHub.
      [if "email" in claims && claims.email_verified then "email" else null]: claims.email,

      // add name (first and last)
      [if "name" in claims then "name" else null]: {
        first: claims.given_name,
        last: claims.family_name,
      },

      [if "picture" in claims && claims.picture != null then "picture" else null]: claims.picture
      
    },
  },
}
