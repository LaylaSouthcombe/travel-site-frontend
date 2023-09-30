import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleTabCards from './index';

describe('ArticleTabCards', () => {
  const mockArticle = {
    id: 1,
    feature_img_url: 'image-url',
    article_category: 'Test category',
    title: 'Article Title',
  };

  test('renders article content when loaded is true', () => {
    render(
      <ArticleTabCards
        article={mockArticle}
        classnames="test-class"
        keyId={1}
        loaded={true}
      />
    );

    const articleLink = screen.getByRole('link');
    const image = screen.getByRole('img');
    const category = screen.getByText('Test category');
    const title = screen.getByText('Article Title');

    expect(articleLink.getAttribute('href')).toBe('/article/1');
    expect(image.getAttribute('src')).toBe('image-url');
    expect(category).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('renders skeleton when loaded is false', () => {
    render(
      <ArticleTabCards
        classnames="test-class"
        keyId={1}
        loaded={false}
      />
    );

    const skeletonImage = screen.getByTestId('skeleton-image');
    const skeletonCategory = screen.getByTestId('skeleton-category');
    const skeletonTitle = screen.getByTestId('skeleton-title');

    expect(skeletonImage).toBeInTheDocument();
    expect(skeletonCategory).toBeInTheDocument();
    expect(skeletonTitle).toBeInTheDocument();
  });

  test('renders nothing when loaded is true and article is undefined', () => {
    render(<ArticleTabCards loaded={true} />);
    
    const skeletonCategory = screen.queryByTestId('skeleton-category');
    const skeletonTitle = screen.queryByTestId('skeleton-title');

    const category = screen.queryByText('Category');
    const title = screen.queryByText('Article Title');

    expect(skeletonCategory).not.toBeInTheDocument();
    expect(skeletonTitle).not.toBeInTheDocument();

    expect(category).not.toBeInTheDocument();
    expect(title).not.toBeInTheDocument();
  });

});
