import Router from 'vue-router';
export default class routerHelper implements IRouterHelper {
    private _router: Router;

    public constructor(router: Router) {
        debugger;
        this._router = router;
    }

    public  To(path?:string):void{
        this._router.push(path);
    }

}

interface IRouterHelper{
    To(path?:string):void;
}