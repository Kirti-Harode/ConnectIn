import React from "react";
import { GrFormClose } from "react-icons/gr";
import { MdPhoto } from "react-icons/md";

class PostForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.openFileLoader = this.openFileLoader.bind(this)
    }

    updateInput(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    openFileLoader(){
        document.getElementById('post-media').click();
    }

    handleFile(e){
        const fileReader = new FileReader();
        const file = e.target.files[0]

        fileReader.onloadend = () => {
            this.setState({ media: file, media_url: fileReader.result })
        };

        if(file) {
            fileReader.readAsDataURL(file)
        } else {
            this.setState({ media_url: "", media: null });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        if (this.state.media) {
            formData.append('post[media]', this.state.media);
        }
        if (this.state.id) {
            formData.append('post[id]', this.state.id);
        }
        formData.append('post[author_id]', this.state.author_id);
        formData.append('post[body]', this.state.body);
        this.props.processForm(formData);
        this.setState({ 
            body: "",
            media: null,
            mediaUrl: null
        });

        document.getElementById('post-media').value = '';
        this.props.closeModal();
    }

    render(){
        const media_preview = this.state.media_url ? <img src={this.state.media_url} /> : null;

        return(
            <div className="post-form-div">
                <header className="post-form-header">
                    <div className="form-type-heading">
                        <h1>{this.props.formType}</h1>
                        <div className="post-close-button-div" onClick={()=> this.props.closeModal()}> 
                            <GrFormClose className='post-close-icon'/>
                        </div>
                    </div>
                    <div className="post-user-info-modal">
                        <img className="user-profile-photo" src={this.props.currentUser.profile_photo_url || window.defaultProfile} />
                        <div className="user-name-bio">
                            <h1>{this.props.currentUser.fname} {this.props.currentUser.lname}</h1>
                            <h2>{this.props.currentUser.bio}</h2>
                        </div>
                    </div>
                </header>

                <div className="post-form-content">
                    <form className="post-form">
                        <div className="post-textarea-div">
                            <textarea className="post-body-textarea" 
                                placeholder="What do you want to talk about?" 
                                value={this.state.body} onChange={this.updateInput('body')} />
                        </div>

                        <div className="post-media-preview">
                            {media_preview}
                        </div>
                        <div className="post-form-footer">
                            <div className="post-photo-button">
                                <div className="photo-add" onClick={()=> this.openFileLoader}>
                                    <MdPhoto className="add-photo-icon"/>
                                </div>
                                <input type="file" id="post-media" accept='image/*' onChange={this.handleFile} />
                            </div>
                            <button className="post-submit-button">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostForm;