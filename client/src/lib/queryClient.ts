import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Extend the RequestInit type to include url
export interface ExtendedRequestInit extends RequestInit {
  url?: string;
}

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  urlOrOptions: string | ExtendedRequestInit,
  options?: RequestInit,
): Promise<Response> {
  let res: Response;
  
  if (typeof urlOrOptions === 'string') {
    // The first parameter is a URL
    const url = urlOrOptions;
    res = await fetch(url, {
      ...options,
      credentials: "include",
    });
  } else {
    // The first parameter is the options object
    const requestOptions = urlOrOptions;
    const url = requestOptions.url as string;
    
    // Create a new options object without the url property
    const { url: _, ...fetchOptions } = requestOptions;
    
    res = await fetch(url, {
      ...fetchOptions,
      credentials: "include",
    });
  }

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
