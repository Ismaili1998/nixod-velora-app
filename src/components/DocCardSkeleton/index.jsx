import React from 'react';
import { Card, Skeleton } from 'antd';

const DocCardSkeleton = () => {
  return (
    <Card className="rounded-xl border border-gray-200" bodyStyle={{ padding: 0 }}>
      <div className="p-4 bg-gray-100">
        <Skeleton.Button active size="small" className="mb-2" />
        <Skeleton.Input active size="large" className="w-32" />
      </div>
      <div className="p-4">
        <div className="flex items-start gap-3 mb-4">
          <Skeleton.Avatar active size={48} />
          <div className="flex-1">
            <Skeleton.Input active size="small" className="w-full mb-2" />
            <Skeleton.Input active size="small" className="w-3/4" />
          </div>
        </div>
        <Skeleton active paragraph={{ rows: 3 }} />
      </div>
    </Card>
  );
};

export default DocCardSkeleton;