// json data with a lot of nesting and missing keys
const fetchedUsers = [
    {
        id: 1,
        name: "A",
        job: {
            title: "SDE",
            company: "Apple",
        },
    },
    {
        id: 2,
        name: "B",
    },
    {
        id: 3,
        name: "C",
        job: {
            title: "DS",
            company: "Google",
        },
    },
];

for (const user of fetchedUsers) {
    console.log(`ID: ${user.id}`);
    console.log(`ID: ${user.name}`);
    // search for job.title only if job is present
    console.log(`ID: ${user.job?.title}`);
}
