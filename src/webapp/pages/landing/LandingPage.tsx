import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardGrid } from "../../components/card-grid/CardGrid";
import { d2TreeData } from "../../../utils/d2-list-data";

export const LandingPage: React.FC = () => {
    const history = useHistory();

    const cards: Card[] = [
        {
            title: "Section",
            key: "main",
            children: [
                {
                    name: "John",
                    description: "Entry point 1",
                    listAction: () => history.push("/for/John"),
                },
                {
                    name: "Mary",
                    description: "Entry point 2",
                    listAction: () => history.push("/for/Mary"),
                },
                {
                    name: "Tree",
                    description: "Entry point 3",
                    listAction: () => history.push(`/tree/${d2TreeData[0]?.path}`),
                },
            ],
        },
    ];

    return <CardGrid cards={cards} />;
};
