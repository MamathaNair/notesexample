
const chapters = require("./chapters").chapters
const R = require('ramda')
module.exports = function (subjectId, chapterId){
  var subjectName = subjectId;
  var chapterData = R.filter(R.propEq('id', chapterId))(chapters)[0]
  chapterData.subject = subjectId; 
  return chapterData;
};
