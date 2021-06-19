// enum is added by TS
// it assigns labels to numbers
// ADMIN = 0
// READ_ONLY = 1
// AUTHOR = 2
enum Role1 { ADMIN, READ_ONLY, AUTHOR }

// accessing enum values
console.log(Role1.READ_ONLY)

// custom starting label
// ADMIN = 5
// READ_ONLY = 6
// AUTHOR = 7
enum Role2 { ADMIN=5, READ_ONLY, AUTHOR }

// string labels
enum Role3 { ADMIN='ADMIN', READ_ONLY='READ_ONLY', AUTHOR='AUTHOR' }
