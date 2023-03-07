import { addItem, deleteItem } from "../redux/actions";
import DiaryItem from "../components/diary/DiaryItem";
import { Modal } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import DiaryForm from "../components/diary/DiaryForm";


export class Main extends Component {

        
    constructor(){
        super();
        this.state = {
            show:false,
            activeItem: null,

        };
    }
  render() {
  
      const { show, activeItem } = this.state
    const { addItem, diaryItems, deleteItem} = this.props
    console.log(diaryItems)
    return (
        //adding diary item
        <div>

            <div>
            <div className="diary">
                <h1 className= "diaryEntry">Please add a entry</h1>
                <DiaryForm addItem={(item) => addItem(item)}/>
                

            
            </div>
             <div className="diary">
                {diaryItems.length > 0 ? (

                   diaryItems.map((item) => {
                      
                          return ( 
                              <DiaryItem
                    deleteItem={(id) => deleteItem(id)}
                    showModal={(item) =>
                      this.setState({ show: true, activeItem: item })
                    }
                    key={item.id}
                    item={item}
                  />
                );
              })
            ) : (
              <h1 className = "noEntries">No Entries</h1>
            )}
                


             </div>

            </div>
                   <Modal
          size="lg"
          show={show}
          onHide={() => this.setState({ show: false })}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {activeItem?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{activeItem?.text}</Modal.Body>
          <Modal.Footer>{activeItem?.date}</Modal.Footer>
        </Modal>
      </div>
    );
  }
}
            
     
const mapStateToProps = (state) => ({

diaryItems:state.diaryItems
 
});

const mapDispatchToProps = (dispatch) => ({

    addItem: (item) => dispatch(addItem(item)),
    deleteItem: (id) => dispatch(deleteItem(id))


});

export default connect(mapStateToProps, mapDispatchToProps)(Main);