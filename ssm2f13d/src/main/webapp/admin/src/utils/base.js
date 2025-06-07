const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm2f13d/",
            name: "ssm2f13d",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm2f13d/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的药店管理系统"
        } 
    }
}
export default base
