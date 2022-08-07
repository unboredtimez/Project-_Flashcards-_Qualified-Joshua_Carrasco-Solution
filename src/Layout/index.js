import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import DeckList from "../Home/DeckList";
import NotFound from "./NotFound";
import CreateDeck from "../CreateDeck/CreateDeck";
import DeckPage from "../DeckPage/DeckPage";
import AddCard from "../AddCard/AddCard";
import EditCard from "../EditCard/EditCard";

function Layout() {

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */
          <Switch>
            <Route exact path="/">
              <DeckList />
            </Route>
            <Route exact path="/decks/new">
              <CreateDeck />
            </Route>
            <Route exact path="/decks/:deckId">
              <DeckPage />
            </Route>
            <Route exact path="/decks/:deckId/edit">
              <p>Deck Edit Page</p>
            </Route>
            <Route exact path="/decks/:deckId/cards/new">
              <AddCard />
            </Route>
            <Route exact path="/decks/:deckId/cards/:cardId/edit">
              <EditCard />
            </Route>
            <Route exact path="/decks/:deckId/study">
              {<p>deck ID study page</p>}
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch> 
        }
      </div>
    </>
  );
}

export default Layout;
