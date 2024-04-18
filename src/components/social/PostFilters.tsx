import Button from 'components/Button'
import React from 'react'

const PostFilters = () => {
  return (
    <div className="flex space-x-3">
      <Button variant="primary" aria="hoot" text="Following" size="sm" />
      <Button variant="outline" aria="hoot" text="Everyone" size="sm" />
      <Button variant="outline" aria="hoot" text="For You" size="sm" />
    </div>
  )
}

export default PostFilters
