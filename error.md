# admin-milier

- Warning: You tried to redirect to the same route you're currently on: "/home"
```
    原因：使用了 Redirect重定向
    解决：使用Switch 包裹 Route
    <Switch>
        {
            this.state.route.map(item=>{
                return <Route key={item.path} exact={item.exact ? true:false} path={item.path} component={item.component}/>
            })
        }
        <Redirect from="/*" to="/home" />
    </Switch>
```