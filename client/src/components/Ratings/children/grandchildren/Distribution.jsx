import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

const FlexboxDiv = styled.div`
  display: flex;
  flex-direction: column;
  `;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 30px;
  `;

const QuantityContainer = styled.div`
  cursor: pointer;
  margin-left: 12%;
  `;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: white;
  width: 25%;
  text-decoration: underline;
  line-height: normal;
  border: none;
  `;

const BackdropDiv = styled.div`
  cursor: pointer;
  background-color: lightgrey;
  position: relative;
  height: 0.5em;
  width: 50%;
  `;

const StyledSpan = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  `;

class Distribution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterState: [],
    };

    this.handleRatingFilterClick = this.handleRatingFilterClick.bind(this);
    this.handleClearFiltersClick = this.handleClearFiltersClick.bind(this);
  }

  handleRatingFilterClick(event) {
    this.props.filterFunc(event.target.id[0]);

    const newLocalFilters = this.state.filterState.slice();
    if (!newLocalFilters.includes(event.target.id[0])) {
      newLocalFilters.push(event.target.id[0]);
    } else {
      const index = newLocalFilters.indexOf(event.target.id[0]);
      newLocalFilters.splice(index, 1);
    }
    this.setState({
      filterState: newLocalFilters,
    });
  }

  // NEED TO FIGURE OUT HOW TO DO THIS - NEEDS TO CLEAR FILTERS LOCALLY AND ON RATINGSJSX
  handleClearFiltersClick() {
    console.log('clear filters');
    // this.state.filterState.forEach((value) => this.props.filterBy(value));
    this.props.filterFunc(0);
    this.setState({
      filterState: [],
    });
  }

  render() {
    let filterStatus;
    if (this.state.filterState.length > 0) {
      let filtersString = 'Reviews filtered by: ';
      this.state.filterState.sort((a, b) => a - b).forEach((num) => filtersString += `${num}, `);

      filterStatus = (
        <StyledSpan>
          {filtersString}
          <button onClick={this.handleClearFiltersClick} id="ClearFilters">Clear</button>
        </StyledSpan>
      );
    } else {
      filterStatus = '';
    }

    const graphData = {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
    };
    const percentGraphData = {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
    };

    let mostCommonReview = 0;
    let allScores = [];
    if (this.props.ratings !== undefined) {
      allScores = Object.keys(this.props.ratings);
      allScores.forEach((score) => {
        graphData[score] = Number(this.props.ratings[score]);
        if (Number(this.props.ratings[score]) > mostCommonReview) {
          mostCommonReview = score;
        }
      });
      for (const key in graphData) {
        if (key !== mostCommonReview) {
          percentGraphData[key] = (graphData[key] / graphData[mostCommonReview]) * 100;
        }
      }
      percentGraphData[mostCommonReview] = 100;
    }

    const ScoreDiv5 = styled.div`
      position: absolute;
      background-color: green;
      height: 0.5em;
      width: ${percentGraphData[5]}%;
      `;

    const ScoreDiv4 = styled.div`
      position: absolute;
      background-color: green;
      height: 0.5em;
      width: ${percentGraphData[4]}%;
      `;
    const ScoreDiv3 = styled.div`
      position: absolute;
      background-color: green;
      height: 0.5em;
      width: ${percentGraphData[3]}%;
      `;
    const ScoreDiv2 = styled.div`
      position: absolute;
      background-color: green;
      height: 0.5em;
      width: ${percentGraphData[2]}%;
      `;
    const ScoreDiv1 = styled.div`
      position: absolute;
      background-color: green;
      height: 0.5em;
      width: ${percentGraphData[1]}%;
      `;

    return (
      <div>
        <FlexboxDiv>

          <ButtonContainer>
            <StyledButton className="ReviewFilter" onClick={this.handleRatingFilterClick} type="button" id="5button">5 stars</StyledButton>
            <BackdropDiv onClick={this.handleRatingFilterClick} id="5Backdrop">
              <ScoreDiv5 onClick={this.handleRatingFilterClick} id="5ScoreDiv" />
            </BackdropDiv>
            <QuantityContainer onClick={this.handleRatingFilterClick} id="5Quantity">{graphData[5]}</QuantityContainer>
          </ButtonContainer>

          <ButtonContainer>
            <StyledButton className="ReviewFilter" onClick={this.handleRatingFilterClick} type="button" id="4">4 stars</StyledButton>
            <BackdropDiv onClick={this.handleRatingFilterClick} id="4Backdrop">
              <ScoreDiv4 onClick={this.handleRatingFilterClick} id="4ScoreDiv" />
            </BackdropDiv>
            <QuantityContainer onClick={this.handleRatingFilterClick} id="4Quantity">{graphData[4]}</QuantityContainer>
          </ButtonContainer>

          <ButtonContainer>
            <StyledButton className="ReviewFilter" onClick={this.handleRatingFilterClick} type="button" id="3">3 stars</StyledButton>
            <BackdropDiv onClick={this.handleRatingFilterClick} id="3Backdrop">
              <ScoreDiv3 onClick={this.handleRatingFilterClick} id="3ScoreDiv" />
            </BackdropDiv>
            <QuantityContainer onClick={this.handleRatingFilterClick} id="3Quantity">{graphData[3]}</QuantityContainer>
          </ButtonContainer>

          <ButtonContainer>
            <StyledButton className="ReviewFilter" onClick={this.handleRatingFilterClick} type="button" id="2">2 stars</StyledButton>
            <BackdropDiv onClick={this.handleRatingFilterClick} id="2Backdrop">
              <ScoreDiv2 onClick={this.handleRatingFilterClick} id="2ScoreDiv" />
            </BackdropDiv>
            <QuantityContainer onClick={this.handleRatingFilterClick} id="2Quantity">{graphData[2]}</QuantityContainer>
          </ButtonContainer>

          <ButtonContainer>
            <StyledButton className="ReviewFilter" onClick={this.handleRatingFilterClick} type="button" id="1">1 stars</StyledButton>
            <BackdropDiv onClick={this.handleRatingFilterClick} id="1Backdrop">
              <ScoreDiv1 onClick={this.handleRatingFilterClick} id="1ScoreDiv" />
            </BackdropDiv>
            <QuantityContainer onClick={this.handleRatingFilterClick} id="1Quantity">{graphData[1]}</QuantityContainer>
          </ButtonContainer>

        </FlexboxDiv>
        {filterStatus}
      </div>
    );
  }
}

export default Distribution;
