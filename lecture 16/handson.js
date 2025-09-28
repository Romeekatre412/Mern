const resume = {
  name:"Romee katre",
  email:"romeekatre412@gmail.com",
  phone:"8669868168",
  skills: ["HTML", "CSS", "c++"],
  workExperience: ["OmegaSoft Technology", "GHRCE"],
  display: function () {
    // display 
    console.log(resume);
  },
  addSkills: function (newSkill) {
   if (newSkill && typeof newSkill === 'string' && !this.skills.includes(newSkill)) {
      this.skills.push(newSkill);
      console.log("Added skill: " + newSkill);
    } else {5
      console.log("Skill '" + newSkill + "' is invalid or already exists.");
    }
  },
  addWorkExperience: function (newExperience) {
    //add new experience
if (newExperience && typeof newExperience === 'string' && !this.workExperience.includes(newExperience)) 
  {
    this.workExperience.push(newExperience);
    console.log("Added work experience: " + newExperience);
    } 
    else 
    {
      console.log("Work experience '" + newExperience + "' is invalid or already exists.");
    }
  },
  showSkills: function () 
  {
    console.log("Work Experience: " + this.workExperience.join(", "));
  },
};

resume.display();
resume.addSkills("React");
resume.addSkills("javascript");
resume.addWorkExperience("9Teen Initiative");
resume.showSkills();

