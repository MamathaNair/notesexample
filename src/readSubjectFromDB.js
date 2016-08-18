
const chapters = require("./chapters").chapters

module.exports = function (subjectId){
  var subjectName = subjectId;

  var subjectData = {
    subjectId: subjectId,
    subjectName: subjectName,
    chapters: chapters
  }
  return subjectData;
};
