export const Tweet = ({tweet, date}) => {

return (

<div className = "Tweet-body">
{tweet}
<br/>
<br/>
<div className="Tweet-date">
{date}

</div>
</div>
)

}

