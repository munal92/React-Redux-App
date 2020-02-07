import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCatImage } from "../actions";
import styled from "styled-components";

const CatImage = props => {
  useEffect(() => {
    props.getCatImage();
  }, [props.getCatImage]);

  if (props.isFetching) {
    return <h3>Fetching a cat </h3>;
  }
  const Button = styled.button`
    color: blue;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid blue;
    border-radius: 3px;
  `;

  const Image = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  `;

  return (
    <div>
      <Button onClick={props.getCatImage}>New Cat!</Button>

      <Image src={props.catImage} alt="a placeholder img" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    catImage: state.image.catImage,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getCatImage })(CatImage);
