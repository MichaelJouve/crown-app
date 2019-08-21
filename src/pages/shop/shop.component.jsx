import React from "react";

import { createStructuredSelector } from 'reselect';

import {selectCollections} from '../../redux/shopCollections/shop.selector';

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";

const ShopPage = ({collections}) =>  (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );

    const mapStateToProps = createStructuredSelector({
      collections: selectCollections
    });

export default connect(mapStateToProps)(ShopPage);
