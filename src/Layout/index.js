import React, {useState} from "react";
import { Route, Switch, Link } from "react-router-dom";

import { listDecks } from "../utils/api";
import Header from "./Header";
import DeckList from "../Home/DeckList";
import NotFound from "./NotFound";

function Layout() {
  const [decks, setDecks] = useState(listDecks())

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
              {<p>Create new Deck page</p>}
            </Route>
            <Route exact path="/decks/:deckId">
              {<p>Deck ID Page</p>}
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
