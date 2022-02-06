import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Static
import NoMatch from './NoMatch';

// Lazy Import
const Home = lazy(() => import('../Pages/Home'));
const Projects = lazy(() => import('../Pages/Projects'));
const CV = lazy(() => import('../Pages/CV'));
const Project = lazy(() => import('../Pages/Project'));
const Quizzs = lazy(() => import('../Pages/Quizzs'));
const Quizz = lazy(() => import('../Pages/Quizz'));


const Rooter = () => (
    <Suspense fallback={<h1>Chargement de la page...</h1>}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/cv" component={CV}/>
                <Route path="/quizzs" component={Quizzs}/>

                <Route path="/project/:slug" component={Project}/>
                <Route path="/quizz/:slug" component={Quizz}/>

                <Route path="*" component={NoMatch}/>
            </Switch>
        </Router>
    </Suspense>
);

export default Rooter;