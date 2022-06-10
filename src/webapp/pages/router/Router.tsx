import { HashRouter, Route, Switch } from "react-router-dom";
import { Example } from "../example/Example";
import { LandingPage } from "../landing/LandingPage";

import { OrganisationalUnitsViewPage } from "../organisations/OrganisationalUnitsTreeViewPage";

const Root = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/for/:name?" render={({ match }) => <Example name={match.params.name ?? "Stranger"} />} />
                <Route path="/tree" render={() => <OrganisationalUnitsViewPage />} />

                {/* Default route */}
                <Route render={() => <LandingPage />} />
            </Switch>
        </HashRouter>
    );
};

export default Root;
