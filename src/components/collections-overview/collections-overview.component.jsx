import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./collections-overview.styles.scss";
import { selectCollectionsForPreview } from "../../redux/shopCollections/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
