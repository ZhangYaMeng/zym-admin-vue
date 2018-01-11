import Home from '@/components/Routeview/Home'
import Content from '@/components/Routeview/Content'
let viewsArr = require.context('@/view', true, /.vue$/);

let asyncRouter = (tepmrout) => {

    return tepmrout.map(ele => {
        if (ele.component === "Home") {
            ele.component = Home
        }
        ele.children.map(elesub => {
            if (elesub.component === "Content") {
                elesub.component = Content
            }
            elesub.children.map(elechild => {
                viewsArr.keys().forEach(element => {
                    let viewsName = element.substring(2, element.length - 4);
                    let tempArr = viewsName.split("/");
                    viewsName = tempArr[tempArr.length - 1]
                    if (viewsName === elechild.component) {
                        elechild.component = viewsArr(element).default
                    }
                });
            })
        })
        return ele
    })
}
export default asyncRouter;