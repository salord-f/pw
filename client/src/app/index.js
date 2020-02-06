import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate, LoginPage, AdminPage, Details, Plugins} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signIn" exact component={() => <LoginPage side={0} />} />
                <Route path="/signUp" exact component={() => <LoginPage side={2} />} />
                <Route path="/forgotPassword" exact component={() => <LoginPage side={1} />} />
                <MainApp />
            </Switch>

        </Router>
    )
}

function MainApp() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/test" exact component={Details}/>
                <Route path="/plugins" exact component={Plugins}/>
                {/*<Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route
                    path="/movies/update/:id"
                    exact
                    component={MoviesUpdate}
                />

                <Route path="/" component={MoviesList} />*/}
                <Route path="/admin" component={AdminPage} />
            </Switch>
        </>
    )
}

export default App
