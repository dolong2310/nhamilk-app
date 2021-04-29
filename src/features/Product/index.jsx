import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ListPage from "./pages/ListPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
    const match = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={match.url} exact component={ListPage} />
            </Switch>
        </>
    );
}

export default ProductFeature;
