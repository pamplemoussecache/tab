/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule relay_rootQuery.graphql
 * @generated SignedSource<<70d01991c5628cddf2bb3cc70c1bc028>>
 * @relayHash 3a81d03efae2d1b74035a4b092b72bd3
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/

/* eslint-disable comma-dangle, quotes */

/*
query relay_rootQuery {
  viewer {
    ...AppContainer_viewer
    id
  }
}

fragment AppContainer_viewer on User {
  id
  username
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "relay_rootQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AppContainer_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "relay_rootQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "relay_rootQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "username",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query relay_rootQuery {\n  viewer {\n    ...AppContainer_viewer\n    id\n  }\n}\n\nfragment AppContainer_viewer on User {\n  id\n  username\n}\n"
};

module.exports = batch;
