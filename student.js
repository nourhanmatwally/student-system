const fs = require ('fs');

const addStudent = (id, name ,grade ,comment) => {
    const student = loadStudent(); 

    const duplicateStudent = student.filter((student) => {
     
        return student.id === id;
      });
      console.log(duplicateStudent);

      
  if (duplicateStudent.length === 0) {
    student.push(
      
      {
        id,
        name,
        grade,
        comment,
      }
    );
    saveStudent(student);
    console.log("Saved Successfully");
  } else {
    console.log("Error Duplicate Id");
  }
};

/////////////////////////////////////
  // load
/////////////////////////////////////

const loadStudent = () => {  
    try {
      const dataBuffer = fs.readFileSync("student.json").toString();
      return JSON.parse(dataBuffer);
    } catch (e) {
      return [];
    }
  };

/////////////////////////////////////
  // SAVE 
/////////////////////////////////////

const saveStudent = (student) => {
    const saveData = JSON.stringify(student);
    fs.writeFileSync("student.json", saveData);
  };

/////////////////////////////////////
  // Delete 
/////////////////////////////////////

  const removeStudent = (id) =>{
    const student = loadStudent()
    const studentToKeep = student.filter((student)=>{
        return student.id !== id
    })
    console.log(studentToKeep)
    saveStudent(studentToKeep)
}

/////////////////////////////////////
  // Read
/////////////////////////////////////

const readStudent = (id)=> { 
    const students = loadStudent()
      const studentsid = students.find((studentsid)=>{
        return studentsid.id === id
      })
      if (studentsid){
        console.log(studentsid);
        console.log(studentsid.id);
        console.log(studentsid.name);
        console.log(studentsid.grade);
        console.log(studentsid.comment);
      }
     else{
       console.log('Erorr');
     }
  }

/////////////////////////////////////
  // List
/////////////////////////////////////

const listStudent = function(){
    const student = loadStudent()
    console.log(("List Student"));
   student.forEach((student) => {
        console.log("id is :" +(student.id)
        +" name is  :"+(student.name)
        +" grade is  :"+(student.grade)
        +" comment is :"+(student.comment))
    });
  }

module.exports = {
    addStudent: addStudent,
    removeStudent:removeStudent,
    readStudent:readStudent,
    listStudent : listStudent
  };