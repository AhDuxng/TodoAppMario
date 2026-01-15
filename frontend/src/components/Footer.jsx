import React from "react";

const Footer = ({ completedTasksCount = 0, activeTasksCount = 0 }) => {
  return (
    <>
      {completedTasksCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                ⭐ Wahoo! Bạn đã hoàn thành {completedTasksCount} nhiệm vụ
                {activeTasksCount > 0 &&
                  `, còn ${activeTasksCount} nhiệm vụ nữa. Let's-a go!`}
              </>
            )}

            {completedTasksCount === 0 && activeTasksCount > 0 && (
              <>🍄 Hãy bắt đầu {activeTasksCount} nhiệm vụ thôi nào!</>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
