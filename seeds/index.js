const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  await seedPosts();
  console.log("--------------");

  await seedComments();
  console.log("--------------");

  await seedVotes();
  console.log("--------------");

  process.exit(0);
};

seedAll();

employeeData = [
    {
    first_name: 'Rafael',
    last_name: 'Arroyo', 
    role_id: 1,
    manager_id: 1,
    },
    {
        first_name: 'Robyn',
        last_name: 'Arroyo', 
        role_id: 2,
        manager_id: 1,
    },
    {
        first_name: 'Bob',
        last_name: 'Smith', 
        role_id: 1,
        manager_id: 2,
    },
    {
        first_name: 'Jane',
        last_name: 'Smith', 
        role_id: 1,
        manager_id: 1,
    },
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;