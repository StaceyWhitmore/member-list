import React, {Component} from 'react'
import getFakeMembers from './getFakeMembers'
import Member from './Member'

class MembersList extends Component {
  constructor() {
    super() //no args
    this.state = {
      member: [],
      loading:false,
      error:null
    }
  }
componentWillMount() {
  this.setState({loading:true})
  getFakeMembers(this.props.count).then(
    members => {
      this.setState({members, loading:false})
    },
    error => {
      this.setState({error, loading:false})
    }
  )
}

//'(members.length)?' evaluatues -to-> tru(thy) when it has a val. else, -> false
render() {
  return(
    <div>
    {
      (loading)?
        <span>Loading Members</span>:
          (members.length)?
            members.map((user, i) =>
              <Member key={i} />
            ):
            <span>0 members loaded...</span>
    }
    {(error) ? <p>Error loading members: error</p> : ""}
    </div>
  )
}//close render()
}//close <MembersList />

export default MemberList
