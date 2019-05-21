
module.exports = {
  mtData: mtData,
  searchmtdata: searchmtdata
}
var mt_data = mtData()
function searchmtdata(keyword) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if(mt.abbr == keyword){
      result = mt.fullName
    } else if (mt.fullName == keyword) {
      result = mt.abbr
    }
  }
  return result || "无查询结果，请检查拼写！"
}

function mtData() {
  var arr = {
    list: [
      {
        fullName: 'Consumer Electronics',
        abbr: 'CE'
      }, {
        fullName: 'dynamic link library',
        abbr: 'dll'
      }, {
        fullName: 'Discreet Monitor Timing',
        abbr: 'DMT'
      }, {
        fullName: 'Document Object Model',
        abbr: 'DOM'
      }, {
        fullName: 'Dial-Up Networking',
        abbr: 'DUN'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }, {
        fullName: 'Enhanced Windows Driver Model',
        abbr: 'E-WDM'
      }
    ]
  }
  return arr
}