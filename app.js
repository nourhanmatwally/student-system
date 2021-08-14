const yargs = require ('yargs');
const student = require ('./student');

////////////////////
// Add
///////////////////

yargs.command({
    command: "add",
    describe: "Add Student",
    // Options
    builder: {
      id: {
        describe: "This is id student",
        demandOption: true,
        type: 'number',
      },
  
      name: {
        describe: "This is student name",
        demandOption: true,
        type: "string",
      },

      grade: {
        describe: "This is student grade",
        demandOption: true,
        type:'number',
      },

      comment: {
        describe: "This is student comment",
        type: "string",
      },
    },
    handler: (argv) => {
      student.addStudent(argv.id, argv.name, argv.grade, argv.Comment)
    },
  });


  ////////////////////
// Delete
///////////////////

  yargs.command({
    command: "delete",
    describe: "Delete Student",
    builder: {
      id: {
        describe: "We Will Delete Student",
        demandOption: true,
        type: 'number',
      }
    },
    handler: (argv) => {
      student.removeStudent(argv.id)
    },
  });


////////////////////
// Read
///////////////////

  yargs.command({
    command: "read",
    describe: "Read Student",
    builder: {
      id: {
        describe: "This is id",
        demandOption: true,
        type: 'number',
      }
    },
    handler: (argv) => {
      student.readStudent(argv.id)
    },
  });
  
  

////////////////////
// List
///////////////////

  yargs.command({
    command: "list",
    describe: "List Studint",
    handler: (argv) => {
      student.listStudent(argv.id)
    },
  });



yargs.parse();