/**
 * 全局方法
 */
export const Common = {
    /**
   * 获取地址栏参数
   * @param key
   * @returns {null}
   */
    getParameter: function (key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },

    /**
     * @param key
     * @returns {null}
     */
    getParameter_hash: function (key) {
        var after = window.location.hash.split("?")[1];
        if (after) {
            var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
            var r = after.match(reg);
            if (r != null) {
                return decodeURIComponent(r[2]);
            }
            else {
                return null;
            }
        }
    },

    /**
     * 通过subjectid找name
     */
    subjectid_to_name: function (subject_id){
        for(let i=0;i<subjects.length;i++){
            if(subjects[i].id == subject_id){
                return subjects[i].name;
            }
        }
        return "总分";
    }
}


var subjects = [
    {id:30,name:"语文"},
    {id:31,name:"数学"},
    {id:32,name:"英语"},
    {id:33,name:"历史"},
    {id:34,name:"地理"},
    {id:35,name:"政治"},
    {id:36,name:"生物"},
    {id:37,name:"物理"},
    {id:38,name:"化学"},

    { id: 10, name: "语文" },
    { id: 11, name: "数学" },
    { id: 12, name: "英语" },
    { id: 13, name: "历史" },
    { id: 14, name: "地理" },
    { id: 15, name: "政治" },
    { id: 16, name: "生物" },
    { id: 17, name: "物理" },
    { id: 18, name: "化学" },
    { id: 19, name: "科学" },
    { id: 20, name: "历史与社会" },
    { id: 21, name: "美术" },

    { id: 5, name: "语文" },
    { id: 6, name: "数学" },
    { id: 7, name: "英语" },
    { id: 8, name: "美术" },
]