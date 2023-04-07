import React from 'react';
import styled from 'styled-components/macro';
import {OptimizedImage} from "../OptimizedImage";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image src={src} alt={alt} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled(OptimizedImage)`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  line-height: 2;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  
  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
