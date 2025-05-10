import React from "react";
import "./TopSelling.scss";
import { useAllProducts } from "../../../../hooks";
import { MainTitle, ProductCard } from "../../../../components";

function TopSelling() {
  const { data: products, isLoading, isError, error } = useAllProducts();

  if (isLoading) {
    return (
      <div className="container">
        <div className="top-sellings-item">
          <MainTitle title="TOP SELLING" />
        </div>
        <p>Loading top sellings...</p>
        <hr />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <div className="top-sellings-item">
          <MainTitle title="TOP SELLING" />
        </div>
        <p>
          Error fetching products:{" "}
          {error?.message || "An unknown error occurred"}
        </p>
        <hr />
      </div>
    );
  }

  return (
    <div className="container top-sellings-section">
      <div className="top-sellings-header">
        <MainTitle title="TOP SELLING" />
      </div>
      <div className="item-cards">
        {Array.isArray(products) && products.length > 0 ? (
          products
            .slice(0, 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <p>No top selling products found.</p>
        )}
      </div>
      <button className="view-all-btn">View All</button>
      <hr className="section-divider" />
    </div>
  );
}

export default TopSelling;
