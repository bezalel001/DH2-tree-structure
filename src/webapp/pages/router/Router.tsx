import { HashRouter, Route, Switch } from "react-router-dom";
import { Example } from "../example/Example";
import { LandingPage } from "../landing/LandingPage";
import { d2TreeData } from "../../../utils/d2-list-data";

import { OrganisationalUnitsViewPage } from "../organisations/OrganisationalUnitsTreeViewPage";

const Root = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/for/:name?" render={({ match }) => <Example name={match.params.name ?? "Stranger"} />} />
                <Route path={`/tree/${d2TreeData[0]?.path}`} render={() => <OrganisationalUnitsViewPage />} />

                {/* Default route */}
                <Route render={() => <LandingPage />} />
            </Switch>
        </HashRouter>
    );
};

export default Root;
