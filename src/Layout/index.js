import React from "react";
import { useState, Route, Switch, Link } from "react-router-dom";

import Header from "./Header";
import DeckList from "../Home/DeckList";
import NotFound from "./NotFound";

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
            <Route path="/decks/:deckId">
              {/* TODO: Implement Deck, where you can see all info about a Deck */}
            </Route>
            <Route path="/decks/:deckId/study">
              {/* TODO: Implement Study, where you can view cards in Deck to study */}
            </Route>
            <Route path="/decks/new">
              {/* TODO: Implement Create New deck */}
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
