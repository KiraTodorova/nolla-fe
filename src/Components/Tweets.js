export const Tweets = ({tweet, date}) => {
    const current = new Date();
    const date = `${current.getDate()} / ${current.getMonth()+1} / ${current.getFullYear()}`;

    return(
    <div className="Tweet">

<div>Tweet1</div>
{tweet} {date}
<div>Tweet2</div>
{tweet} {date}
    </div>
    )

}