import React from 'react';
import { shallow } from 'enzyme';
import { NextSeo } from 'next-seo';
import useRouter from 'next/router';

import { AppConfig } from '@/utils/AppConfig';
import  Meta  from './Meta';

jest.mock('next/router');

describe('Meta', () => {
  it('renders a <NextSeo> component with the correct props', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const canonical = 'https://example.com/test';
    
    jest.mock("next/router", () => ({
        useRouter() {
            return {
                route: "/",
                pathname: "",
                query: "",
                asPath: "",
            };
        },
    }));

    const wrapper = shallow(<Meta title={title} description={description} canonical={canonical} />);
    const nextSeo = wrapper.find(NextSeo);

    expect(nextSeo).toHaveLength(1);
    expect(nextSeo.prop('title')).toEqual(title);
    expect(nextSeo.prop('description')).toEqual(description);
    expect(nextSeo.prop('canonical')).toEqual(canonical);
    expect(nextSeo.prop('openGraph')).toEqual({
      title,
      description,
      url: canonical,
      locale: AppConfig.locale,
      site_name: AppConfig.site_name,
    });
  });

  it('renders <Head> component with the correct tags', () => {
    jest.mock("next/router", () => ({
        useRouter() {
            return {
                route: "/",
                pathname: "",
                query: "",
                asPath: "",
            };
        },
    }));
    const wrapper = shallow(<Meta title="Test Title" description="Test Description" />);
    const head = wrapper.find('Head');

    expect(head).toHaveLength(1);
    // expect(head.find('meta[key="charset"]')).toHaveLength(1); 
    // expect(head.find('meta[key="viewport"]')).toHaveLength(1);
    // expect(head.find('link[key="apple"]').prop('href')).toEqual('/test/apple-touch-icon.png');
    // expect(head.find('link[key="icon32"]').prop('href')).toEqual('/test/favicon-32x32.png');
    // expect(head.find('link[key="icon16"]').prop('href')).toEqual('/test/favicon-16x16.png');
    // expect(head.find('link[key="favicon"]').prop('href')).toEqual('/test/favicon.ico');
  });
});
