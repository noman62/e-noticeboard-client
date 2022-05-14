import React from 'react';

const UpcomingNotice = (props) => {
    console.log(props.notice);
    return (
        <div>

        <li><marquee behavior="" direction="">{props.notice.utitle}</marquee></li>

      </div>
    );
};

export default UpcomingNotice;