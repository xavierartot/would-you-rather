import React, { Component } from 'react'
import { Badge, Button, CardText } from 'reactstrap'
import { MdCheck } from 'react-icons/md'
import { connect } from 'react-redux'

class AnswerPollStatistics extends Component {
  render() {
    const {
      color, background, statistics,
    } = this.props
    // const statistics = {
    // percentageOptionOneVotes,
    // percentageOptionTwoVotes,
    // voteOne,
    // voteTwo,
    // countOptionOne,
    // countOptionTwo,
    // textVoteOne: question.optionOne.text,
    // textVoteTwo: question.optionTwo.text,
    // }
    return (
      <CardText
        className={`text-${color}`}
        style={{ fontSize: '1.3rem' }}
      >
        <span>
          {/*
          <span>
            <span
              className={`border border-${background} border-left-0 border-top-0 border-right-0`}
              style={{ borderBottom: '1em!important' }}
            >statistics
            </span>
            <span className="d-block">
              {statistics.countOptionOne > 1 ?
                (<span>votes: <Badge>{statistics.countOptionOne}</Badge></span>)
                :
                (<span>vote: <Badge>{statistics.countOptionOne}</Badge></span>)
                }
            </span>
          </span>
 */}
          {statistics.voteOne
          ? (
            <span>
              <Button
                className={`btn btn-outline-${color} mt-3 d-block`}
                color={background}
                style={{ fontSize: '1em' }}
              >
                {statistics.textVoteOne}
                <MdCheck
                  className={`text-${color} ml-3`}
                  style={{ fontSize: '1.6rem' }}
                />
              </Button>
              <span>
                vote(s): <Badge className="mr-2" color={background}>{statistics.countOptionOne}</Badge>
                Percentage: <Badge color={background}>{statistics.percentageOptionOneVotes }</Badge>
              </span>
              <span className="d-block" style={{ fontSize: '1.2em' }}>{statistics.textVoteTwo}: </span>
              {statistics.countOptionTwo !== 0
              ?
                <span className="">
                  vote(s): <Badge className="mr-2" color={background}>{statistics.countOptionTwo}</Badge>
                  Percentage: <Badge color={background}>{statistics.percentageOptionTwoVotes }</Badge>
                </span>
                : <span className="through">vote: 0 time</span>
              }
            </span>
          ) : (
            <span>
              {statistics.countOptionTwo !== 0
              ?
                <span>
                vote(s): <Badge className="mr-2" color={background}>{statistics.countOptionTwo}</Badge>
                Percentage: <Badge color={background}>{statistics.percentageOptionTwoVotes }</Badge>
                </span>
                : <span className="through">vote: 0 time</span>
              }
              <span className="d-block">{statistics.textVoteTwo}: </span>
              <Button
                className={`btn btn-outline-${color} mt-3 d-block`}
                color={background}
                style={{ fontSize: '1em' }}
              >
                {statistics.textVoteTwo}

                <MdCheck
                  className={`text-${color} ml-3`}
                  style={{ fontSize: '1.6rem' }}
                />
              </Button>
              <span className="d-block">
                {statistics.countOptionOne !== 0
                ?
                  <span>
                  vote(s): <Badge className="mr-2" color={background}>{statistics.countOptionOne}</Badge>
                  Percentage: <Badge color={background}>{statistics.percentageOptionOneVotes }</Badge>
                  </span>
                  : <span className="through">vote: 0 time</span>
                }
              </span>
            </span>

          )}
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
