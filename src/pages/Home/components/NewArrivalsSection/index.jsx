import React from "react";
import "./NewArrivals.scss";
import { useAllProducts } from "../../../../hooks";
import { MainTitle, ProductCard } from "../../../../components";

function NewArrivals() {
  const { data: products, isLoading, isError, error } = useAllProducts();

  if (isLoading) {
    return (
      <div className="container">
        <div className="new-arrivals-item">
          <MainTitle title="NEW ARRIVALS" />
        </div>
        <p>Loading new arrivals...</p>
        <hr />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <div className="new-arrivals-item">
          <MainTitle title="NEW ARRIVALS" />
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
    <div className="container new-arrivals-section">
      <div className="new-arrivals-header">
        <MainTitle title="NEW ARRIVALS" />
      </div>
      <div className="item-cards">
        {Array.isArray(products) && products.length > 0 ? (
          products
            .slice(0, 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <p>No new arrivals found.</p>
        )}
      </div>
      <button className="view-all-btn">View All</button>
      <hr className="section-divider" />
    </div>
  );
}

export default NewArrivals;
