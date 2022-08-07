import React, {useState} from "react";
import { Route, Switch, Link } from "react-router-dom";

import { listDecks } from "../utils/api";
import Header from "./Header";
import DeckList from "../Home/DeckList";
import NotFound from "./NotFound";
import CreateDeck from "../CreateDeck/CreateDeck";
import DeckPage from "../DeckPage/DeckPage";

function Layout() {
  const [decks, setDecks] = useState([])

  console.log(decks)
  
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
