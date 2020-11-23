import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import axios from 'axios';


class EachExpense extends Component {

    state = {
        checked: false
      };

      
    changeBoolean = async () => {
    
        try {
          const res = await axios({
            method: "PATCH",
            url: `http://localhost:4000/expenses/edit/${this.props.theExpense._id}`,
            withCredentials: true,
            data: {payed: this.state.checked}
          });
    
        } catch (error) {
          console.log(error, "GET expenses error");
        }
      }


/*   deleteExpense = async () => {
    try {
      const res = await axios({
        method: "DELETE",
        url: `http://localhost:4000/groups/delete/${this.state.group._id}`,
        withCredentials: true,
      });
    } catch (error) {
      console.log(error, "GET expenses error");
    }
  }
 */
    
      async handleCheckBox(e) {
        await this.changeBoolean()

        this.setState({
          checked: !this.state.checked
        })
      }
    
    render() {
        console.log(this.props.theExpense, "hhh")
        return (
            <div>
                 <div>
                    {this.props.theGroup.members.map(eachMember =>{
                        if(eachMember._id == this.props.theExpense.payer){
                            return (
                                <p>{eachMember.username}</p>
                                )
                            }
                        })}
                    </div>
                        <p> owes </p>
                        <div>
                    {this.props.theGroup.members.map(eachMember =>{
                        if(eachMember._id == this.props.theExpense.beneficiary){
                            return (
                                <p>{eachMember.username}</p>
                                )
                            }
                        })}
                    </div>
                        <p>{this.props.theExpense.expenseImport}</p>
                        <input type="checkbox" onChange= {(e)=> this.handleCheckBox(e)} checked={this.state.checked}  />
                  
            </div>
        )
    }
}




export default withAuth(EachExpense);
