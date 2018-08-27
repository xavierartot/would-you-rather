import React, { Component } from 'react'
import { Badge, Button, CardText } from 'reactstrap'
import { MdCheck } from 'react-icons/md'
import { connect } from 'react-redux'

class AnswerPollStatistics extends Component {
  render() {
    const {
      percentageOption, textVoteOne, textVoteTwo, numberOption, vote, color, background,
    } = this.props
    return (
      <CardText
        className={`text-${color}`}
        style={{ fontSize: '1.3rem' }}
      >
        <span>
          <span>
            <span
              className={`border border-${background} border-left-0 border-top-0 border-right-0`}
              style={{ borderBottom: '1em!important' }}
            >statistics
            </span>
            <span className="d-block">
              {numberOption > 1 ?
                (<span>votes: <Badge>{numberOption}</Badge></span>)
                :
                (<span>votes: <Badge>{numberOption}</Badge></span>)
                }
            </span>
            <span className="d-block">
              <span>Percentage: <Badge>{percentageOption }</Badge></span>
            </span>
          </span>
          <Button
            className={`btn btn-outline-${color} mt-3`}
            style={{ fontSize: '1em' }}
          >
            {vote === 'voteTwo' ? textVoteTwo : textVoteOne}
            <MdCheck
              className={`text-${color} mr-3`}
              style={{ fontSize: '1.4rem' }}
            />
          </Button>
          {vote === 'voteOne' ? textVoteOne : textVoteTwo}
        </span>
      </CardText>
    )
  }
}
function mapStateToProps({ template }, props) {
  return {
    color: template.color,
    background: template.background,
  }
}
export default connect(mapStateToProps)(AnswerPollStatistics)
