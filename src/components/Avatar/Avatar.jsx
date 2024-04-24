import "./Avatar.css";
import { IoPersonSharp } from "react-icons/io5";

/**
 * Challenge: Create a flexible Avatar component!
 *
 * Check the slides for notes on how the component
 * should be used.
 *
 * Each of the 3 different avatars should have a
 * wrapper div with the classes below:
 *
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 *
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 *
 * Check the hints.md file if you are really stuck.
 *
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */

function Avatar({children, ...rest}) {
  console.log("rest: ", rest);

  const avatarContent = getContent()
  function getColorClass() {
    const colorArray = ["navy", "pink", "red", "blue", "green"]
    const rNumber = getRandomInt(5)
    return colorArray[rNumber]
    
  }

  function getContent() {
    const avObject = {content: "", classinfo: ""}
    if(children) {
      avObject.content = children
      avObject.classinfo = "avatar avatar-letters " + getColorClass()
    } else if(rest.src) {
      avObject.content = <img src={rest.src} alt={rest.alt}></img>
      avObject.classinfo = "avatar "
    } else {
      avObject.content = <IoPersonSharp />
      avObject.classinfo = "avatar avatar-icon " + getColorClass()
    }
    return avObject
  }
  console.log('avatarContent: ', avatarContent)
  return (
    <div className={avatarContent.classinfo}>
      {avatarContent.content}
    </div>
  );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default Avatar;
