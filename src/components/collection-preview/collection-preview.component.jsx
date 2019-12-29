import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

// import "./collection-preview.styles.scss";

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewContainer
} from "./collection-preview.styles";

const CollectionPreivew = ({ title, items, match, history }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle>
      <span onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}>
        {title.toUpperCase()}
      </span>
    </CollectionPreviewTitle>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreivew);
